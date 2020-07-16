import Link from "next/link";

export default function Category({ option, index }) {
  return (
    <li key={index}>
      <Link href="/gif/[keyword]" as={`/gif/${option}`}>
        <a>
          {option}
        </a>
      </Link>
    </li>
  );
}
