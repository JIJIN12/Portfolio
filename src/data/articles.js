import React from "react";

const article_1 = () => ({
    date: "7 May 2023",
    title: "The Benefits of Cloud Computing",
    description:
        "Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
    keywords: [
        "The Benefits of Cloud Computing",
        "Tharindu",
        "Tharindu N",
        "Tharindu Nayanajith",
    ],
    style: `
        .article-content {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .randImage {
            align-self: center;
            outline: 2px solid red;
        }
    `,
    body: (
        <div className="article-content">
            <div className="paragraph">Content of article 1</div>
            <img
                src="https://picsum.photos/200/300"
                alt="random"
                className="randImage"
            />
        </div>
    ),
});

const article_2 = () => ({
    date: "7 May 2023",
    title: "Artificial Intelligence in Healthcare",
    description:
        "AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
    keywords: [
        "Artificial Intelligence in Healthcare",
        "Tharindu",
        "Tharindu N",
        "Tharindu Nayanajith",
    ],
    style: ``,
    body: (
        <div>
            <h1>Content of article 2</h1>
        </div>
    ),
});

const myArticles = [article_1, article_2];

export default myArticles;
