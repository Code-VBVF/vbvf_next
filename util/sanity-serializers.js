import Link from "next/link";

export const serializers = {
  //this helps react understand how to present links
  marks: {
    link: ({ mark, children }) => {
      const { href } = mark;
      return (
        <Link href={href}>
          <a>{children}</a>
        </Link>
      );
    },
    list: (props) => {
      const { type } = props;
      const bullet = type === "bullet";
      if (bullet) {
        return <ul>{props.children}</ul>;
      }
      return <ol>{props.children}</ol>;
    },
    listItem: (props) => <li>{props.children}</li>,
  },
};
