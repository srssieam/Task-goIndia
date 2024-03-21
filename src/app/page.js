
import DiscussionForum from "@/components/DiscussionForum";
import MarketStories from "@/components/MarketStories";
import SmallScreenView from "@/components/SmallScreenView";


export default function Home() {

  return (
    <main>
      <div className="lg:p-6 lg:flex lg:gap-7">

        {/* Discussion forum */}
        <div className="hidden lg:block lg:w-3/4 space-y-5">
          <DiscussionForum />
        </div>

        {/* Market stories */}
        <div className="hidden lg:block lg:flex-1 space-y-5">
          <MarketStories />
        </div>

        <SmallScreenView />
      </div>
    </main>
  );
}
