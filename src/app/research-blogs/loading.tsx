export default function Loading() {
  return (
    <div className="min-h-screen py-20 px-6 max-w-7xl mx-auto space-y-0">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
          Research & Insights
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Exploring the cutting edge of web development through in-depth
          research and technical analysis.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 pt-16">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  );
}

function Skeleton() {
  return (
    <div className="animate-pulse space-y-4 border p-4 rounded-lg">
      <div className="flex gap-3">
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        <div className="h-4 bg-gray-300/60 rounded w-1/3"></div>
      </div>
      <div className=" rounded w-full p-1">
        <div className="h-6 bg-gray-300 rounded w-full"></div>
        <div className="h-6 bg-gray-300 rounded w-2/3  mt-1"></div>
      </div>
      <div className=" rounded w-full p-1 flex flex-col gap-1  pb-6">
        <div className="h-3 bg-gray-300/60 rounded w-full"></div>
        <div className="h-3 bg-gray-300/60 rounded w-4/5"></div>
        <div className="h-3 bg-gray-300/60 rounded w-full"></div>
        <div className="h-3 bg-gray-300/60 rounded w-4/5"></div>
        <div className="h-3 bg-gray-300/60 rounded w-full"></div>
        <div className="h-3 bg-gray-300/60 rounded w-4/5"></div>
        <div className="h-3 bg-gray-300/60 rounded w-full"></div>
        <div className="h-3 bg-gray-300/60 rounded w-4/5"></div>
      </div>
      <div className="rounded w-full flex gap-5">
        <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
        <div className="rounded w-48 flex flex-col gap-1">
          <div className="h-5 bg-gray-300 rounded w-full"></div>
          <div className="h-3 bg-gray-300/60 rounded w-2/3"></div>
        </div>
      </div>
      <div className="h-4 bg-gray-300 rounded w-32 mt-8"></div>
      <div className="h-3 bg-gray-300/60 rounded w-32 mt-8"></div>
    </div>
  );
}
