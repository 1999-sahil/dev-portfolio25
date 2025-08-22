"use client";

import React from "react";
import { Loader2, Unplug } from "lucide-react";

function Error() {
  return (
    <div className="w-[300px] h-fit m-auto py-12 lg:py-20 flex flex-col items-center justify-center gap-3">
      <Unplug className="w-6 h-6 text-primary/50" />
      <h2 className="text-lg font-inter font-semibold text-primary/50">
        Oops!
      </h2>
      <p className="text-center font-inter font-normal text-xs lg:text-sm text-primary/50">
        Something's gone wrong, but don't worry we're trying to fix it.
      </p>
      <Loader2 className="size-4 animate-spin text-primary/60" />
    </div>
  );
}

export default Error;
