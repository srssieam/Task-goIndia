"use client"

import { useEffect, useState } from "react";
import DiscussionForum from "@/components/DiscussionForum";


export default function Home() {

  return (
    <main>
      <div className="p-6 flex gap-7">

        {/* Discussion forum */}
        <DiscussionForum />

        {/* Market stories */}
        <div className="flex-1 space-y-5">
          <button className="text-2xl text-red-700 font-semibold uppercase px-6 py-4 rounded-md bg-gray-300">
            Market Stories
          </button>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae distinctio dolor sed consequuntur quam officia voluptatibus debitis pariatur voluptas architecto. Dolore nobis iusto consequuntur ratione eaque ex sequi laudantium voluptatem voluptate maxime, id deserunt voluptatibus in architecto odio accusantium, iure ut nemo quidem, est reiciendis doloribus? Architecto maxime mollitia aliquid.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
