export default function Loading() {
  return (
    <div className="min-h-screen bg-background py-20 px-6 max-md:pt-36">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="animate-pulse">
          <div className="rounded w-1/2 flex items-center justify-center gap-3 mb-4">
            <div className="h-6 bg-gray-300 rounded w-1/2"></div>
            <div className="h-6 bg-gray-300/60 rounded w-1/2"></div>
            <div className="h-6 bg-gray-300/60 rounded w-1/5"></div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="h-10 bg-gray-300 rounded w-4/5"></div>
            <div className="h-10 bg-gray-300 rounded "></div>
          </div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-300/60 rounded mt-10"></div>
            <div className="h-4 bg-gray-300/60 rounded w-4/5"></div>
            <div className="h-4 bg-gray-300/60 rounded w-[90%]"></div>
            <div className="h-4 bg-gray-300/60 rounded "></div>
            <div className="h-4 bg-gray-300/60 rounded w-1/5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
