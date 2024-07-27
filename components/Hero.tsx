
import Post from '@/components/Post';

const Hero = () => {
  return (
    <div className='mx-12 '>
        <section className='m-4 bg-white border-gray-800 rounded-xl grow shadow '>
            <Post 
              caption="Empowering communities, one step at a time." 
              description="At the heart of our mission is a dedicated commitment to empowering communities, recognizing that sustainable change is achieved through incremental steps towards progress. We embark on a journey where each stride is purposeful, each action intentional, and each community member uplifted.Our approach to empowerment is multifaceted, encompassing education, economic development, and social inclusion. By providing accessible resources and fostering skill development, we strive to equip individuals with the tools they need to shape their destinies. From supporting local entrepreneurs to initiating educational programs, we believe that every initiative, no matter how small, contributes to a larger tapestry of transformation." 
              imageURL='/a.jpg' />
            <Post 
              caption="Nurturing growth and equality in every community" 
              description="At the core of our unwavering commitment lies the profound belief in nurturing growth and equality within every community we touch. We envision a world where every individual, regardless of background or circumstance, has the opportunity to flourish and contribute meaningfully to society.
                Our multifaceted approach involves cultivating sustainable growth through community-driven initiatives, fostering educational programs that empower minds, and championing equal opportunities for all. We recognize that true progress stems from inclusivity, and we strive to create environments that celebrate diversity, embrace collaboration, and dismantle barriers to success." 
              imageURL='/b.jpg' />
            <Post 
              caption="Innovation for social good" 
              description="A mesmerizing sunset over the mountains." imageURL='/a.jpg' />
            <Post caption="Delicious Food" description="Enjoying a delightful meal with friends." imageURL='/' />
            <Post caption="Beautiful Sunset" description="A mesmerizing sunset over the mountains." imageURL='/a.jpg' />
            <Post caption="Delicious Food" description="Enjoying a delightful meal with friends." imageURL='/' />
            <Post caption="Beautiful Sunset" description="A mesmerizing sunset over the mountains." imageURL='/a.jpg' />
            <Post caption="Delicious Food" description="Enjoying a delightful meal with friends." imageURL='/' />
        
        </section>

    
    </div>
  );
}

export default Hero;
