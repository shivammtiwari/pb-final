import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { backend_url, server } from "../../server";
import "./Parlour.css";
import Loader from "../Layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsShop } from "../../redux/actions/product";
import { RiMapPinLine } from "react-icons/ri";
import { AiOutlineMessage } from 'react-icons/ai'
import styles from "../../styles/styles";
import { toast } from "react-toastify";

const ShopInfo = ({ isOwner }) => {
  const [data, setData] = useState({});
  const { products } = useSelector((state) => state.products);
  const [isLoading, setIsLoading] = useState(false);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllProductsShop(id));
    setIsLoading(true);
    axios.get(`${server}/shop/get-shop-info/${id}`).then((res) => {
      setData(res.data.shop);
      setIsLoading(false);
    }).catch((error) => {
      console.log(error);
      setIsLoading(false);
    })
  }, [])

  console.log(id)
  const handleMessageSubmit = async () => {
    if (isAuthenticated) {
      const groupTitle = id + user._id;
      const userId = user._id;
      const sellerId = id;
      await axios
        .post(`${server}/conversation/create-new-conversation`, {
          groupTitle,
          userId,
          sellerId,
        })
        .then((res) => {
          navigate(`/inbox?${res.data.conversation._id}`);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    } else {
      toast.error("Please login to create a conversation");
    }
  };

  const logoutHandler = async () => {
    axios.get(`${server}/shop/logout`, {
      withCredentials: true,
    });
    window.location.reload();
  };

  const totalReviewsLength =
    products &&
    products.reduce((acc, product) => acc + product.reviews.length, 0);

  const totalRatings = products && products.reduce((acc, product) => acc + product.reviews.reduce((sum, review) => sum + review.rating, 0), 0);

  const averageRating = totalRatings / totalReviewsLength || 0;

  return (
    <>
      {
        isLoading ? (
          <Loader />
        ) : (
          <div className="ParlorHeaderWrapper">
            <div className="ParlorHeader">
              <div className="ParlorHeaderImage">
                <img src='https://img.freepik.com/free-photo/woman-washing-head-hairsalon_1157-27179.jpg' alt=""
                // src={`${backend_url}${data.avatar}`}
                />
              </div>
              <div className="ParlorHeaderContent">
                <h1  >{data.name}</h1>
                <div className="address">
                  <span><RiMapPinLine /></span>
                  <p >  {data.address} {data.zipCode}</p>
                </div>
                <h5 className=" pb-1 text-[15px]">
                  Average rating : {averageRating}/5
                </h5>
                {isOwner ? null :
                  <div
                    className={`${styles.button} bg-[#0000] border-black mt-2 border-2 rounded-[4px] h-11`}
                    onClick={handleMessageSubmit}
                  >
                    <span className="text-[#ffffff] flex items-center">
                      Send Message
                      <AiOutlineMessage className="ml-1" />
                    </span>
                  </div>
                }
                {isOwner && (
                  <div className="py-3 px-4">
                    <Link to="/settings">
                      <div className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}>
                        <span className="text-white">Edit Shop</span>
                      </div>
                    </Link>
                    <div className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}
                      onClick={logoutHandler}
                    >
                      <span className="text-white">Log Out</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default ShopInfo;
