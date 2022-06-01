import { useAxios } from "../../hooks/hooks";
import { Link } from "react-router-dom";

const ActivityGrid = (props) => {
  const [activities] = useAxios(
    "https://wdev2.be/fs_tijl/groepswerk2/api/activities"
  );
  const [categories] = useAxios(
    "https://wdev2.be/fs_tijl/groepswerk2/api/categories"
  );
  const data = [...activities, ...categories];

  const { className, className2 } = props;
  return (
    <>
      {data.length > 0 &&
        data
          /*.filter((a) => {
            a.act_typ_id == ;
          })*/
          .map(({ act_id, act_title }) => (
            <div className={className} key={act_id}>
              <div className={className2}>
                <Link to="/categoryview">
                  <img src={`./src/image/${image}`} alt={act_title} />
                  <h3>{act_title}</h3>
                </Link>
              </div>
            </div>
          ))}
    </>
  );
};

export default ActivityGrid;
