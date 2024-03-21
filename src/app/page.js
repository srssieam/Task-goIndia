
import DiscussionForum from "@/components/DiscussionForum";
import MarketStories from "@/components/MarketStories";


export default function Home() {

  return (
    <main>
      <div className="p-6 flex gap-7">

        {/* Discussion forum */}
        <div className="hidden lg:block w-3/4 space-y-5">
          <DiscussionForum />
        </div>

        {/* Market stories */}
        <div className="hidden lg:block flex-1 space-y-5">
          <MarketStories />
        </div>
      </div>
    </main>
  );
}
