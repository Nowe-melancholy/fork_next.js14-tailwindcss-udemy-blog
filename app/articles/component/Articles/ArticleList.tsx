import Link from "next/link";
import { Article } from "../../../types";
import ShowImage from "../Image";
import LinkForBlog from "../LinkForBlog";

type ArticleListProp = {
  articles: Article[];
};

const ArticleList = ({ articles }: ArticleListProp) => {
  return (
    <>
      {articles.map(async (article) => {
        return (
          <article className="shadow my-4 flex flex-col" key={article.id}>
            <Link href={`articles/${article.id}`} className="hover:opacity-75">
              <ShowImage articleId={article.id} />
            </Link>

            <div className="bg-white flex flex-col justify-start p-6">
              <LinkForBlog
                articleId={article.id}
                clazzName={["text-blue-700 pb-4 font-bold"]}
                contents={article.title}
              />
              <p className="text-sm pb-3b text-slate-900 pb-4">
                published on {article.createdAt}
              </p>
              <LinkForBlog
                articleId={article.id}
                clazzName={["text-slate-900 pb-6"]}
                contents={article.cntents}
              />
              <LinkForBlog
                articleId={article.id}
                clazzName={["text-pink-800 hover:text-black"]}
                contents={"続きを読む"}
              />
            </div>
          </article>
        );
      })}
    </>
  );
};

export default ArticleList;