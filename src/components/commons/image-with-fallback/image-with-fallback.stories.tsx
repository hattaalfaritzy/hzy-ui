import type { Meta, StoryFn } from "@storybook/react";
import { ImageWithFallback } from "./";

export default {
  title: "Components/Commons/Image With Fallback",
  component: ImageWithFallback as Meta<typeof ImageWithFallback>["component"],
} as Meta<typeof ImageWithFallback>;

export const ImageWithFallbackDefault: StoryFn<typeof ImageWithFallback> = (
  args
) => {
  return (
    <ImageWithFallback
      {...args}
      src="https://cdn.vectorstock.com/i/500p/17/06/htt-logo-design-template-with-strong-and-modern-vector-53241706.jpg"
      alt="A valid image"
      className="w-32 h-32 rounded-md"
    />
  );
};

export const ImageWithFallbackEmpty: StoryFn<typeof ImageWithFallback> = (
  args
) => {
  return (
    <ImageWithFallback
      {...args}
      src=""
      alt="Image failed to load"
      className="w-32 h-32 rounded-md"
    />
  );
};

export const ImageWithCustomFallback: StoryFn<typeof ImageWithFallback> = (
  args
) => {
  return (
    <ImageWithFallback
      {...args}
      src=""
      alt="Image failed to load"
      className="w-32 h-32 rounded-md"
      iconFallback={
        <div className="flex justify-center items-center text-center text-red-500 font-bold">
          Custom Fallback
        </div>
      }
    />
  );
};
