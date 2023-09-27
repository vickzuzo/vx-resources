import React from "react";

interface IProps {
  title: string;
  query: string;
  category: string;
}

export const Header: React.FC<IProps> = ({ category, query, title }) => {
  if (query && category) {
    return (
      <h1 className="heading3 self-start text-white-800">
        Search results for "{query}" in{" "}
        <span className="uppercase">"{category}"</span>
      </h1>
    );
  }

  if (query) {
    return (
      <h1 className="heading3 self-start text-white-800">
        Search results for "{query}"
      </h1>
    );
  }

  if (category) {
    return (
      <h1 className="heading3 self-start text-white-800">
        <span className="uppercase">"{category}"</span>
      </h1>
    );
  }

  return <h1 className="heading3 self-start text-white-800">No Results</h1>;
};
