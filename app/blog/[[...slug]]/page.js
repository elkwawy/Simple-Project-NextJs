export default function BlogPage({ params }) {
  console.log(params?.slug);

  if (params?.slug?.length === 2) {
    return (
      <h3 className="text-2xl text-center mt-8">
        {" "}
        Blog for category <strong>{params.slug[0]}</strong> for title{" "}
        <strong>{params.slug[1]}</strong>
      </h3>
    );
  } else if (params?.slug?.length === 1) {
    return (
      <h3 className="text-2xl text-center mt-8">
        {" "}
        Blog for category <strong>{params.slug[0]}</strong>
      </h3>
    );
  }

  return (
    <div className="text-center">
      <h2 className="text-2xl"> Blog Page</h2>
      <p className="text-gray-500 mt-2">This is the blog page</p>
    </div>
  );
}
