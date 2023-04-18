import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const Pagination = ({ changePage, pagination }) => {
    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white rounded-lg my-5 px-4 py-3  sm:px-6 md:my-9">
            <div className="flex flex-1 justify-between sm:hidden">
                <Link
                    to="#"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </Link>
                <Link
                    to="#"
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </Link>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing{" "}
                        <span className="font-medium">
                            {pagination.pageNumber * pagination.pageSize + 1}
                        </span>{" "}
                        to{" "}
                        <span className="font-medium">
                            {pagination.isLast
                                ? pagination.totalElements
                                : Math.min(
                                      pagination.totalElements,
                                      pagination.pageNumber *
                                          pagination.pageSize +
                                          pagination.pageSize -
                                          1
                                  )}
                        </span>{" "}
                        of{" "}
                        <span className="font-medium">
                            {pagination.totalElements}
                        </span>{" "}
                        results
                    </p>
                </div>
                <div>
                    <nav
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm flex justify-center items-center"
                        aria-label="Pagination"
                    >
                        <p className="mx-4 font-bold">Page</p>
                        {!pagination.isFirst && (
                            <Link
                                to=""
                                aria-disabled
                                onClick={() =>
                                    changePage(pagination.pageNumber - 1)
                                }
                                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                <span className="sr-only">Previous</span>
                                <ChevronLeftIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </Link>
                        )}

                        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                            {pagination.pageNumber + 1}
                        </span>
                        {!pagination.isLast && (
                            <Link
                                to="#"
                                onClick={() =>
                                    changePage(pagination.pageNumber + 1)
                                }
                                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                <span className="sr-only">Next</span>
                                <ChevronRightIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </Link>
                        )}
                    </nav>
                </div>
            </div>
        </div>
    );
};
export default Pagination;
