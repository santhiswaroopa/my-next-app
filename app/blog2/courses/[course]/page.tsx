import Link from "next/link";
import styles from "./course.module.css";

const courseTopics: Record<string, string[]> = {
  python: ["introduction", "datatypes"],
  java: ["features", "editions"],
};

export default async function CoursePage({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const { course } = await params;

  const topics = courseTopics[course.toLowerCase()];

  if (!topics) {
    return <h2>Course not found</h2>;
  }

  return (
    <div>
      <h2 className={styles.title}>Course: {course}</h2>

      <div className={styles.topicList}>
        {topics.map((topic) => (
          <Link
            key={topic}
            href={`/blog2/courses/${course}/${topic}`}
            className={styles.topicCard}
          >
            {topic}
          </Link>
        ))}
      </div>
    </div>
  );
}