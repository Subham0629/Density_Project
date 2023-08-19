


import Emotions from '@/components/Emotions';
import Navbar from '../components/Navbar';
import Manifesto from '@/components/Manifesto';
import Frustration from '@/components/Frustration';
import Social from '@/components/Social';
import TestComp from '@/components/TestComp';



const Home = () => {
  return (
    <div>
      <Navbar />
      <Emotions/>
      <Manifesto/>
      <Frustration/>
      {/* <Social/> */}
      <TestComp/>
    </div>
  );
};

export default Home;

