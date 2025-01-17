'use client';

import { useFormStatus } from 'react-dom';
import { createArticle } from './action';

const CreateArticlePage = () => {
  const { pending } = useFormStatus();

  return (
    <div className='min-h-screen py-8 px-4 md:px-12'>
      <h2 className='text-2xl font-bold mb-4'>ブログ新規作成</h2>
      <form
        className='bg-slate-200 p-6 rounded shadow-lg'
        action={createArticle}
      >
        <div className='mb-4'>
          <label className='text-gray-700 text-sm font-bold mb-2'>
            タイトル
          </label>
          <input
            type='text'
            name='title'
            className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:line-none'
          />
        </div>
        <div className='mb-4'>
          <label className='text-gray-700 text-sm font-bold mb-2'>本文</label>
          <textarea
            name='content'
            className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:line-none'
          />
        </div>
        <button
          type='submit'
          className={`py-2 px-4 border rounded-md ${
            pending
              ? ' bg-pink-400 cursor-not-allowed'
              : ' bg-pink-300 hover:bg-pink-400'
          }`}
          disabled={pending}
        >
          投稿
        </button>
      </form>
    </div>
  );
};

export default CreateArticlePage;
