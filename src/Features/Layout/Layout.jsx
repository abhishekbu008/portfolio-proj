import { Blog, Experience, Hobby, Profile, Project, Skill } from "../";
import { blogs } from "../../constants/blogs";

function Layout() {
  return (
    <section className="my-16 w-10/12 mx-auto grid grid-cols-3 gap-11 lg:block lg:child:mb-6 sm:w-11/12 sm:my-6">
      <Profile className="col-span-3" />
      <Skill sectionName="frontend" className="col-span-1" />
      <Experience className="col-span-2" />
      <Project className="col-span-3" />
      <Hobby className="col-span-1" />
      <div className="col-span-2">
        {blogs.map((blog) => (
          <Blog
            title={blog.title}
            img={blog.img}
            key={blog.id}
            link={blog.link}
            descriptions={blog.descriptions}
          />
        ))}
      </div>
    </section>
  );
}

export default Layout;
