import { Filters } from "@/components/filters";
import { Header } from "@/components/header";
import { ResourceCard } from "@/components/resource-card";
import { SearchForm } from "@/components/search-form";
import { getResources, getResourcesPlaylist } from "@/sanity/actions";

export const revalidate = 900;

interface IProps {
  searchParams: { [key: string]: string };
}

const Page = async ({ searchParams }: IProps) => {
  const resources = await getResources({
    query: searchParams.query || "",
    category: searchParams?.category || "",
    page: "1",
  });
  const resourcesPlaylist = await getResourcesPlaylist();
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover text-center bg-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white">
            VX-Dev Mastery Resources
          </h1>
        </div>
        <SearchForm />
      </section>
      <Filters />
      {(searchParams.category || searchParams.query) && (
        <section className="flex-center mt-6 w-full flex-col sm:mt-20">
          <Header
            title="Resources"
            query={searchParams?.query || ""}
            category={searchParams?.category || ""}
          />
          <div className="mt-12 w-full flex flex-wrap justify-center gap-16 sm:justify-start">
            {resources?.length > 0 ? (
              resources.map((resource: any) => (
                <ResourceCard
                  key={resource._id}
                  id={resource._id}
                  title={resource.title}
                  views={resource.views}
                  slug={resource.slug}
                  image={resource.image}
                />
              ))
            ) : (
              <p className="body-regular text-center">No resources found</p>
            )}
          </div>
        </section>
      )}
      {resourcesPlaylist?.length > 0 &&
        resourcesPlaylist.map((item: any) => (
          <section
            key={item._id}
            className="flex-center w-full flex-col mt-6 sm:mt-20"
          >
            <h1 className="heading3 self-start text-white-800">{item.title}</h1>
            <div className="mt-12 flex flex-wrap justify-center gap-16 w-full sm:justify-start">
              {item.resources.map((resource: any) => (
                <ResourceCard
                  key={resource._id}
                  id={resource._id}
                  title={resource.title}
                  views={resource.views}
                  slug={resource.slug}
                  image={resource.image}
                />
              ))}
            </div>
          </section>
        ))}
    </main>
  );
};

export default Page;
