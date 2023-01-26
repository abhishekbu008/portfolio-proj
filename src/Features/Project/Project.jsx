import { useMemo, useState } from "react";
import {
  Button,
  Heading,
  Pagination,
  SectionContainer,
} from "../../components";
import { projectSections, projects } from "../../constants/projects";
import { arrayToStr } from "../../helpers/helpers";
import ProjectCard from "./ProjectCard/ProjectCard";

function Project({ className, style }) {
  const classNames = arrayToStr([className]);

  const styles = {
    ...style,
  };

  const [section, setSection] = useState(projectSections.React);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSectionClick = (section) => setSection(section);

  const filteredProjects = useMemo(
    () => projects.filter((project) => project.section === section),
    [section]
  );

  const allSections = Object.values(projectSections).map((p) => (
    <Button
      key={p}
      active={section === p}
      onClick={() => handleSectionClick(p)}
      className="sm:py-1.5 sm:px-3"
    >
      {p}
    </Button>
  ));

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <section className={classNames} style={styles}>
      <SectionContainer className="mb-11 md:mb-6">
        <Heading className="mb-4">Projects ({allSections.length})</Heading>
        <div className="flex gap-4 flex-wrap">{allSections}</div>
      </SectionContainer>
      {filteredProjects.length > 0 && (
        <section
          className="grid gap-8 lg:block lg:child:mb-6"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(30%, 1fr))",
          }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </section>
      )}
      <Pagination
        className="mt-9 w-fit ml-auto lg:mx-auto"
        currentPage={currentPage}
        pageSize={3}
        onPageChange={handlePageChange}
        totalCount={filteredProjects.length}
      />
    </section>
  );
}

export default Project;
