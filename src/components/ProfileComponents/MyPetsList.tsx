import { useSelector } from "react-redux";
import { selectPets } from "../../redux/auth/selectors";
import MyPet from "./MyPet";

const MyPetsList = () => {
  const pets = useSelector(selectPets);

  return (
    <section className="my-pets-list">
      {pets?.length !== 0 ? (
        pets.map((pet) => <MyPet key={pet._id} data={pet} />)
      ) : (
        <p className="favorites-no-pets my-pets">No my pets yet :(</p>
      )}
    </section>
  );
};

export default MyPetsList;
