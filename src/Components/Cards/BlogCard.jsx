import React from "react";
import BlogImage from "../../assets/frontpage/frontpage-feature-1.webp"

function BlogCard() {
  return (
    <div className="lg:w-[300px] space-y-5">
      <img src={BlogImage} alt="blogcard.png" />
      <h5 className="text-sm-h5 md:text-md-h5 lg:text-h5 font-derivia uppercase">custom subdomain</h5>
      <p>Isikan nama subdomain sesuai nama acara</p>
    </div>
  );
}

export default BlogCard;
