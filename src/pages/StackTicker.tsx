import { data } from "@/data/stackData";

function InfiniteScrollAnimationPage() {
    return (
        <div className="flex overflow-hidden ">
            <ul className="flex animate-infinite-scroll whitespace-nowrap gap-10 bg-gradient-to-br from-gray-900 to-blue-gray-800 py-4 text-white">
                {[...data, ...data].map((stack) => {
                    return (
                        <li key={stack.ticker} className="flex flex-col items-center text-center text-lg gap-2 font-mono">
                            {stack.image && (
                                <img
                                    src={stack.image}
                                    alt={stack.ticker}
                                    className="w-10 h-10 object-contain"
                                />
                            )}
                            <p className="text-gray-300">{stack.ticker}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default InfiniteScrollAnimationPage;

