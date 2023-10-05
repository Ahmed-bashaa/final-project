import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Stores/CategorySlice";
import { Helmet } from "react-helmet";

export default function Category() {
  let { categoryList } = useSelector((selector) => selector.categoryData);
  let Disp = useDispatch();
  useEffect(() => {
    Disp(getAllCategory());
  }, []);
  return (
    <div>
      <Helmet>
        <title>category</title>
      </Helmet>

      <div className="row my-5 ">
        {categoryList.map((el) => {
          return (
            <div className="col-md-4 my-3 ">
              <img src={el.image} className="w-100 smallImg" alt="" />
              <div className="border border-2 text-center">
                <h5 className="text-success font1">{el.name}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
