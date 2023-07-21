"use client";
import React, { useState, useEffect } from "react";
import makeAPICall from "../../helpers/apiUtils";
import moment from "moment";
import he from "he";
import Image from "next/image";
import Footer from "../../components/footer";
import NavBar from "../../components/navbar";

export default function LandingPage() {
  const [naijaNews, setNaijaNews] = useState([]);
  const [allNews, setAllNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNaijaNews = () => {
    setLoading(true);
    return makeAPICall({
      path: "https://billionaires.africa/wp-json/wp/v2/posts?tags=204", 
      method: "GET",
    })
      .then((res) => {
        setNaijaNews(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        throw err;
      });
  };

  const fetchAllAfricaNews = () => {
    setLoading(true);
    return makeAPICall({
      path: "https://billionaires.africa/wp-json/wp/v2/posts",
      method: "GET",
    })
      .then((res) => {
        setAllNews(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        throw err;
      });
  };

  useEffect(() => {
    fetchNaijaNews();
    fetchAllAfricaNews();
  }, []);

  // Function to remove the <p> tag from the HTML string
  const removePTag = (htmlString) => {
    if (typeof document === "undefined") {
      return null; // or handle the absence of localStorage according to your requirements
    }
    const div = document.createElement("div");
    div.innerHTML = htmlString;
    return div.textContent;
  };

  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <NavBar />
          <section className="max-w-full mx-auto px-4 pb-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div>
                <div className="img-container-image">
                  <Image
                    src={naijaNews[0]?.jetpack_featured_media_url}
                    alt={naijaNews[0]?.title?.rendered}
                    width="1000"
                    height="1000"
                  />
                </div>
              </div>
              <div className="bg-black-black hero-section-details">
                <div className="flex items-center justify-center h-full p-8">
                  <div>
                    <h2>HOT NEWS</h2>
                    <a
                      href={naijaNews[0]?.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h3 className="mt-4 mb-4">
                        {he.decode(naijaNews[0]?.title?.rendered || "")}
                      </h3>
                    </a>
                    <p>
                      {removePTag(
                        he.decode(naijaNews[0]?.excerpt?.rendered || "")
                      )}
                    </p>
                    <div className="mt-2 flex items-center">
                      <h4 className="mr-2">
                        {naijaNews[0]?.yoast_head_json?.author}
                      </h4>
                      <h4 className="mr-2">-</h4>
                      <h4>
                        {moment(naijaNews[0]?.modified).format("MMMM Do, YYYY")}
                      </h4>
                    </div>
                    <br />
                    <br />
                    <a
                      href={naijaNews[0]?.link}
                      className="read-more"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="ng-section">
            <div className="max-w-full mx-auto px-4 pb-3 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 hr-rule-two">
                <div className="flex items-center">
                  <h1 className="ng-section-title">SOUTH AFRICA</h1>
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="https://billionaires.africa/category/west-central-africa/"
                    className="px-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    VIEW ALL <i className="fa fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="max-w-full mx-auto px-4 pt-8 sm:px-6 lg:px-8 bg-grey-grey">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 pb-4 gap-4 all-post-all">
                {naijaNews?.slice(0, 8).map((news, index) => (
                  <div key={index}>
                    <a href={news.link} target="_blank" rel="noreferrer">
                      <div className="img-container-image-all">
                        <Image
                          src={news?.jetpack_featured_media_url}
                          alt={news?.title?.rendered}
                          width="1000"
                          height="1000"
                        />
                      </div>
                    </a>
                    <a href={news.link} target="_blank" rel="noreferrer">
                      <h3 className="mt-4">
                        {he.decode(news?.title?.rendered || "")}
                      </h3>
                    </a>

                    <div className="mt-2 flex items-center p-1">
                      <h4 className="mr-2">HOT NEWS</h4>
                      <h5>{moment(news.modified).format("MMMM Do, YYYY")}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="ng-section bg-grey-grey">
            <div className="max-w-full mx-auto px-4 pb-3 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16 hr-rule-two">
                <div className="flex items-center">
                  <h1 className="ng-section-title-two">
                    RECENT STORIES FROM ACROSS AFRICA
                  </h1>
                </div>
                <div className="flex justify-between">
                  <a
                    href="https://billionaires.africa/category/latest-news/hot-news/"
                    className="px-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    VIEW ALL <i className="fa fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="max-w-full mx-auto px-4 pt-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="md:col-span-12">
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div>
                      <div className="img-container-image-recent">
                        <Image
                          src={allNews[0]?.jetpack_featured_media_url}
                          alt={allNews[0]?.title?.rendered}
                          width="1000"
                          height="1000"
                        />
                      </div>
                    </div>
                    <div className="hero-section-details-two">
                      <div className="flex items-center justify-center h-full p-8">
                        <div>
                          <a
                            href={allNews[0]?.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <h3 className="mt-4 mb-4">
                              {he.decode(allNews[0]?.title?.rendered || "")}
                            </h3>
                          </a>

                          <div className="mt-2 flex items-center">
                            <h2 className="mr-2">HOT NEWS</h2>
                            <h4 className="mr-2">
                              {allNews[0]?.yoast_head_json?.author}
                            </h4>
                            <h4 className="mr-2">-</h4>
                            <h4>
                              {moment(allNews[0]?.modified).format(
                                "MMMM Do, YYYY"
                              )}
                            </h4>
                          </div>
                          <p>
                            {removePTag(
                              he.decode(allNews[0]?.excerpt?.rendered || "")
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 pb-4 gap-4 all-post-all">
                    {allNews?.slice(1, 10).map((news, index) => (
                      <div key={index}>
                        <a href={news.link} target="_blank" rel="noreferrer">
                          <div className="img-container-image-all">
                            <Image
                              src={news?.jetpack_featured_media_url}
                              alt={news?.title?.rendered}
                              width="1000"
                              height="1000"
                            />
                          </div>
                        </a>
                        <a href={news.link} target="_blank" rel="noreferrer">
                          <h3 className="mt-4">
                            {he.decode(news?.title?.rendered || "")}
                          </h3>
                        </a>

                        <div className="mt-2 flex items-center p-1">
                          <h4 className="mr-2">HOT NEWS</h4>
                          <h5>
                            {moment(news.modified).format("MMMM Do, YYYY")}
                          </h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer recentNews={naijaNews} />
        </div>
      )}
    </div>
  );
}
