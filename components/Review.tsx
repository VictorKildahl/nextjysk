import { StarIcon } from "@heroicons/react/solid";
import classNames from "classnames";

type ReviewProps = {
  rate: number;
  count: number;
};

export default function Review({ rate, count }: ReviewProps) {
  return (
    <div className="mt-3 flex flex-col items-center">
      <p className="sr-only">{rate} out of 5 stars</p>
      <div className="flex items-center">
        {[0, 1, 2, 3, 4].map((rating) => (
          <StarIcon
            key={rating}
            className={classNames(
              rate > rating ? "text-yellow-400" : "text-gray-200",
              "flex-shrink-0 h-5 w-5"
            )}
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="mt-1 text-sm text-gray-500">{count} reviews</p>
    </div>
  );
}
