import Link from "next/link";

export default function Category({ option, index }) {
  return (
    <li key={index} onClick={() => localStorage.setItem("lastKeyword", option)}>
      <Link href="/gif/[keyword]" as={`/gif/${option}`} prefetch={false}>
        <a>
          {option}
        </a>
      </Link>
    </li>
  );
}
