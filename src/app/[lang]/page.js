

export default async function SpanishPage({params}) {
  
  const { lang } = await params;

  return (
    <div className="w-screen h-screen text-white flex justify-center items-center font-[family-name:var(--font-geist-sans)]">
      {lang}
    </div>
  );
}