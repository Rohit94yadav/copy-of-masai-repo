 import styles from "./userDetails.module.css";
const UserDetails = (props) => {
  const { src ,first_name, last_name, address , karma, followers ,posts, is_following}=props;

  if(props.is_following){

  }
  
  return (
    <>
      <div className={styles.main} data-testid="user-container">
        <img className={styles.img} src={src}/>
        <div>
          <div className={styles.div2} >
            <h3 data-testid="user-fname">{first_name}</h3>
            <h3 data-testid="user-lname">{last_name}</h3>
          </div>
          <div>
            <p data-testid="user-address">{address}</p>
          </div>
        </div>
        <div >
          <h3 data-testid="user-karma"> {karma}</h3>
        </div>
        <div>
          <h3 data-testid="user-followers">{followers}</h3>
        </div>
        <div>
          <h3 data-testid="user-posts">{posts}</h3>
        </div>
        <button className={styles.btn} data-testid="follow-btn" >{is_following?"Unfollow":"Follow"}</button>
      </div>
    </>
  );
};
export default UserDetails;
