import { useState } from "react";
import { FaStar } from "react-icons/fa";
/* eslint-disable react/prop-types */
const StarRating = ({ numOfStars = 1 }) => {
  const [rating, setRating] = useState(0);
  const [isHovering, setIsHovering] = useState(0);

  // console.log(rating,"<- rating  ishovering->",isHovering)

  const handleOnClick = (index) => {
    setRating(index);
  };

  const handleOnMove = (index) => {
    setIsHovering(index);
  };

  const handleOnLeave = () => {
    setIsHovering(rating);
  };

  return (
    <div>
      <div className="flex gap-2 justify-center items-center mt-7">
        {[...Array(numOfStars)].map(
          (_, index) => (
            (index += 1),
            (
              <FaStar
                key={index}
                className={`${
                  index <= (rating || isHovering) ? "text-[#ffc918]" : ""
                } flex items-center justify-center overflow-hidden`}
                onClick={() => handleOnClick(index)}
                onMouseEnter={() => handleOnMove(index)}
                onMouseLeave={() => handleOnLeave()}
                size={40}
              />
              
            )
          )
        )}
      </div>
    </div>
  );
};

export default StarRating;
