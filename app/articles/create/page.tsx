"use client";
import { createArticle } from "@/api/createArticle";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreateArticlePage = () => {
  const router = useRouter();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSibmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    await createArticle({
      title,
      content,
    });

    setLoading(false);

    router.push("/");
    router.refresh();
  };

  return (
    <div className="min-h-screen py-8 px-4 md:px-12">
      <h2 className="text-2xl font-bold mb-4">ブログ新規作成</h2>
      <form
        className="bg-slate-200 p-6 rounded shadow-lg"
        onSubmit={handleSibmit}
      >
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">
            タイトル
          </label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:line-none"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">本文</label>
          <textarea
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:line-none"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className={`py-2 px-4 border rounded-md ${
            loading
              ? " bg-pink-400 cursor-not-allowed"
              : " bg-pink-300 hover:bg-pink-400"
          }`}
          disabled={loading}
        >
          投稿
        </button>
      </form>
    </div>
  );
};

export default CreateArticlePage;
