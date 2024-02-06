import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import{ SkeletonTheme } from 'react-loading-skeleton';


function CardSkeleton() {
    return ( 

        <SkeletonTheme baseColor="gray" highlightColor="#444">
        <>
            <div
        className="image-card-container"
        style={{ cursor: "pointer" }}
      >
       <Skeleton height={'20rem'} width={'18rem'}  duration={1.5} className="wave-animation" />
      </div>

        </>
        </SkeletonTheme>
     );
}

export default CardSkeleton;