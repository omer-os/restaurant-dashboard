"use client";

import { FiPlus, FiSearch } from "react-icons/fi";
import TableRow from "./TableRow";
import { Category } from "@lib/interfacses";
import { useCategoryData } from "@components/hooks/useCategoryData";
import CategoryModal from "@components/blocks/modal/CategoryModal";
import { db } from "@lib/firebase-config";
import { collection, doc, setDoc } from "firebase/firestore";

const tableHeadings = ["Image", "Name", "Items", "Status", "Actions"];
const categoryData: Category[] = [
  {
    image: "https://placehold.co/300x300",
    name: "n erjon kpew oner ",
    itemsNo: 5,
    status: true,
    id: "1",
    activeDate: {
      startDate: {
        day: 1,
        month: 1,
      },
      endDate: {
        day: 1,
        month: 1,
      },
    },
  },
  {
    image: "https://placehold.co/300x300",
    name: "kmer pie",
    itemsNo: 5,
    status: true,
    id: "2",
    activeDate: {
      startDate: {
        day: 1,
        month: 1,
      },
      endDate: {
        day: 1,
        month: 1,
      },
    },
  },
  {
    image: "https://placehold.co/300x300",
    name: "kmerjnrtp porem",
    itemsNo: 5,
    status: false,
    id: "3",
    activeDate: {
      startDate: {
        day: 1,
        month: 1,
      },
      endDate: {
        day: 1,
        month: 1,
      },
    },
  },
  {
    image: "https://placehold.co/300x300",
    name: "momt Category",
    itemsNo: 5,
    status: false,
    id: "4",
    activeDate: {
      startDate: {
        day: 1,
        month: 1,
      },
      endDate: {
        day: 1,
        month: 1,
      },
    },
  },
  {
    image: "https://placehold.co/300x300",
    name: "lr pomyu",
    itemsNo: 5,
    status: true,
    id: "5",
    activeDate: {
      startDate: {
        day: 1,
        month: 1,
      },
      endDate: {
        day: 1,
        month: 1,
      },
    },
  },
  {
    image: "https://placehold.co/300x300",
    name: "opktp oern irgt poirnoitr",
    itemsNo: 5,
    status: "auto",
    id: "6",
    activeDate: {
      startDate: {
        day: 1,
        month: 1,
      },
      endDate: {
        day: 1,
        month: 1,
      },
    },
  },
  {
    image: "https://placehold.co/300x300",
    name: "krtg ipnryhp",
    itemsNo: 5,
    status: true,
    id: "7",
    activeDate: {
      startDate: {
        day: 1,
        month: 1,
      },
      endDate: {
        day: 1,
        month: 1,
      },
    },
  },
  {
    image: "https://placehold.co/300x300",
    name: "mkipihy njortg",
    itemsNo: 5,
    status: true,
    id: "8",
    activeDate: {
      startDate: {
        day: 1,
        month: 1,
      },
      endDate: {
        day: 1,
        month: 1,
      },
    },
  },
];
export default function CategoriesTable({
  CATEGORIES,
  restaurantId,
}: {
  CATEGORIES: any;
  restaurantId: string;
}) {
  const {
    categories,
    setCategories,
    OpenUpdateModal,
    setOpenUpdateModal,
    selectedCategory,
    categoryName,
    setCategoryName,
    categoryImage,
    setCategoryImage,
    categoryStatus,
    setCategoryStatus,
    activeDate,
    setActiveDate,
    searchQuery,
    setSearchQuery,
  } = useCategoryData(CATEGORIES);

  const updateHandeler = async () => {
    console.log(selectedCategory);
    
    setTimeout(async () => {
      const updatedCategories = categories.map((category) =>
        category.id === selectedCategory?.id
          ? {
              ...category,
              name: categoryName,
              image: categoryImage,
              status: categoryStatus,
              activeDate: {
                startDate: activeDate.startDate,
                endDate: activeDate.endDate,
              },
            }
          : category
      );
      setCategories(updatedCategories);
  
      // Check if the selectedCategory and its id is defined
      if (selectedCategory && selectedCategory.id) {
        const restaurantCol = collection(db, "restaurants");
        const restaurantDoc = doc(restaurantCol, restaurantId);
        const categoryCol = collection(restaurantDoc, "categories");
        const categoryDoc = doc(categoryCol, selectedCategory.id);
  
        // Try-catch block to handle potential Firestore errors
        try {
          await setDoc(
            categoryDoc,
            {
              name: categoryName,
              image: categoryImage,
              status: categoryStatus,
              activeDate: {
                startDate: activeDate.startDate,
                endDate: activeDate.endDate,
              },
            },
            { merge: true }
          );
        } catch (error) {
          console.error("Error updating category: ", error);
        }
      } else {
        console.log("No selectedCategory or selectedCategory.id is undefined.");
      }
  
      setOpenUpdateModal(false);
    }, 1000);
  };

    const addCategoryHandler = () => {
    const newCategory = {
      image: "https://placehold.co/300x300",
      name: "New Category",
      itemsNo: 0,
      status: true,
      activeDate: {
        startDate: {
          day: 1,
          month: 1,
        },
        endDate: {
          day: 1,
          month: 1,
        },
      },
    };
    const restaurantCol = collection(db, "restaurants");
    const restaurantDoc = doc(restaurantCol, restaurantId);
    const categoryCol = collection(restaurantDoc, "categories");
    const categoryDoc = doc(categoryCol);
    setDoc(categoryDoc, newCategory, { merge: true });

    // add id to new category
    const newCategoryWithId = {
      ...newCategory,
      id: categoryDoc.id,
    };

    setCategories([newCategoryWithId, ...categories]);
  };

  return (
    <>
      <div className="overflow-x-auto overflow-y-scroll max-h-[75vh]">
        <div className="sticky left-0 flex gap-3 w-full md:w-max">
          <div className="w-full flex flex-col">
            <div className="text-3xl font-bold">All Categories</div>
            <div className="mb-3 mt-4">
              <div className="flex relative">
                <FiSearch className="text-gray-500 absolute left-2.5 top-2.5" />
                <input
                  type="text"
                  placeholder="Search for menus..."
                  className="px-4 border w-full border-gray-300 rounded py-2 pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <table className="w-full min-w-max divide-y divide-gray-200">
          <thead className="bg-gray-100 border-b sticky top-0 left-0">
            <tr>
              {tableHeadings.map((heading, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {categories
              .filter((category) =>
                category.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((category, index) => (
                <TableRow key={category.name + index} category={category} />
              ))}
          </tbody>
        </table>
        <CategoryModal
          categoryName={categoryName || ""}
          setCategoryName={setCategoryName}
          categoryImage={categoryImage}
          setCategoryImage={setCategoryImage}
          open={OpenUpdateModal}
          setOpen={setOpenUpdateModal}
          onSave={updateHandeler}
          categoryStatus={categoryStatus === undefined ? true : categoryStatus}
          setCategoryStatus={setCategoryStatus}
          activeDate={
            activeDate || {
              startDate: {
                day: 1,
                month: 1,
              },
              endDate: {
                day: 1,
                month: 1,
              },
            }
          }
          setActiveDate={setActiveDate}
        />
      </div>
      <button
        onClick={addCategoryHandler}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 flex items-center"
      >
        <FiPlus className="mr-2" />
        Add new category
      </button>
    </>
  );
}
