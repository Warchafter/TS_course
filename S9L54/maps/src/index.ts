import { User } from './User';
import { CustomMap } from './CustomMap';

const user = new User();  // Generate a user with random data
const customMap = new CustomMap('map');  // Initialize the map

customMap.addUserMarker(user);