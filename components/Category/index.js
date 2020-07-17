import Link from "next/link";

export default function Category({ option, index }) {
  return (
    <li key={index}>
      <Link href="/gif/[keyword]" as={`/gif/${option}`} prefetch={false}>
        <a>
          {option}
        </a>
      </Link>
    </li>
  );
}
