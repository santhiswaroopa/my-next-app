"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./courses.module.css";

const courseTopics: Record<string, string[]> = {
  python: ["introduction", "datatypes"],
  java: ["features", "editions"],
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const activeCourse = pathname.split("/")[3]; // gets python/java

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h3>Courses</h3>

        {Object.keys(courseTopics).map((course) => (
          <div key={course}>
            <Link href={`/blog2/courses/${course}`}>
              <div className={styles.courseItem}>
                {course.charAt(0).toUpperCase() + course.slice(1)}
              </div>
            </Link>

            {/* Show topics only for active course */}
            {activeCourse === course && (
              <div className={styles.topicDropdown}>
                {courseTopics[course].map((topic) => (
                  <Link
                    key={topic}
                    href={`/blog2/courses/${course}/${topic}`}
                  >
                    <div className={styles.topicItem}>
                      - {topic}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.content}>{children}</div>
    </div>
  );
}
