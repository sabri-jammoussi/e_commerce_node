/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";

const product = {
  name: "Basic Tee 6-Pack ",
  price: "$192",
  rating: 3.9,
  reviewCount: 117,
  href: "#",
  imageSrc:
    "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-quick-preview-02-detail.jpg",
  imageAlt: "Two each of gray, white, and black shirts arranged on table.",
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "XXL", inStock: true },
    { name: "XXXL", inStock: false },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductView({ open, onClose }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      {/* Backdrop - now visible on mobile too */}
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-0 text-center sm:items-center sm:p-4">
          <DialogPanel
            transition
            className="relative flex w-full max-w-3xl transform flex-col overflow-hidden bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:rounded-lg sm:align-middle data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:right-6 sm:top-6"
            >
              <span className="sr-only">Close</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>

            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
              {/* Image - full width on mobile, 4 cols on tablet, 5 on desktop */}
              <div className="sm:col-span-4 lg:col-span-5">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="w-full object-cover sm:rounded-lg"
                />
              </div>

              {/* Product details - full width on mobile, 8 cols on tablet, 7 on desktop */}
              <div className="px-4 pb-6 pt-5 sm:col-span-8 sm:px-6 sm:pt-6 lg:col-span-7 lg:px-8">
                <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  {product.name}
                </h2>

                <section aria-labelledby="information-heading" className="mt-2">
                  <h3 id="information-heading" className="sr-only">
                    Product information
                  </h3>

                  <p className="text-xl text-gray-900 sm:text-2xl">
                    {product.price}
                  </p>

                  {/* Reviews */}
                  <div className="mt-4 sm:mt-6">
                    <h4 className="sr-only">Reviews</h4>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            aria-hidden="true"
                            className={classNames(
                              product.rating > rating
                                ? "text-gray-900"
                                : "text-gray-200",
                              "size-4 shrink-0 sm:size-5"
                            )}
                          />
                        ))}
                      </div>
                      <p className="sr-only">{product.rating} out of 5 stars</p>
                      <a
                        href="#"
                        className="ml-2 text-xs font-medium text-indigo-600 hover:text-indigo-500 sm:ml-3 sm:text-sm"
                      >
                        {product.reviewCount} reviews
                      </a>
                    </div>
                  </div>
                </section>

                <section
                  aria-labelledby="options-heading"
                  className="mt-6 sm:mt-10"
                >
                  <h3 id="options-heading" className="sr-only">
                    Product options
                  </h3>

                  <form>
                    {/* Colors */}
                    <div>
                      <legend className="text-sm font-medium text-gray-900">
                        Color
                      </legend>
                      <RadioGroup
                        value={selectedColor}
                        onChange={setSelectedColor}
                        className="mt-2 flex items-center gap-x-3 sm:mt-4"
                      >
                        {product.colors.map((color) => (
                          <Radio
                            key={color.name}
                            value={color}
                            aria-label={color.name}
                            className={classNames(
                              color.selectedClass,
                              "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1"
                            )}
                          >
                            <span
                              aria-hidden="true"
                              className={classNames(
                                color.class,
                                "size-6 rounded-full border border-black/10 sm:size-8"
                              )}
                            />
                          </Radio>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Sizes */}
                    <div className="mt-6 sm:mt-10">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-900">
                          Size
                        </div>
                        <a
                          href="#"
                          className="text-xs font-medium text-indigo-600 hover:text-indigo-500 sm:text-sm"
                        >
                          Size guide
                        </a>
                      </div>

                      <RadioGroup
                        value={selectedSize}
                        onChange={setSelectedSize}
                        className="mt-2 grid grid-cols-4 gap-2 sm:mt-4 sm:gap-4"
                      >
                        {product.sizes.map((size) => (
                          <Radio
                            key={size.name}
                            value={size}
                            disabled={!size.inStock}
                            className={classNames(
                              size.inStock
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              "group relative flex items-center justify-center rounded-md border px-3 py-2 text-xs font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:px-4 sm:py-3 sm:text-sm"
                            )}
                          >
                            <span>{size.name}</span>
                            {size.inStock ? (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  stroke="currentColor"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  className="absolute inset-0 size-full stroke-2 text-gray-200"
                                >
                                  <line
                                    x1={0}
                                    x2={100}
                                    y1={100}
                                    y2={0}
                                    vectorEffect="non-scaling-stroke"
                                  />
                                </svg>
                              </span>
                            )}
                          </Radio>
                        ))}
                      </RadioGroup>
                    </div>

                    <button
                      type="submit"
                      className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-base"
                    >
                      Add to bag
                    </button>
                  </form>
                </section>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
