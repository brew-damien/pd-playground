import React, { useEffect, useRef, useState } from 'react';
import ln_f35 from '../images/photos/ln_f35.jpg';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';
import ProgressGauge from '../components/ProgressGauge';

const ParagraphAndImage = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsSticky(true);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const progressGauges = [50, 90, 70].map((value, index) => (
        <div className="mr-8 text-center" key={index}>
            <p>Percentage</p>
            <ProgressGauge endValue={value} />
        </div>
    ));

    const progressBars = [
        { label: 'Percentage of people in the top 90%', value: 90 },
        { label: 'Percentage of people in the top 70%', value: 70 },
        { label: 'Percentage of people in the bottom 50%', value: 50 },
    ].map((item, index) => (
        <div className="mb-4" key={index}>
            <p>{item.label}</p>
            <ProgressBar endValue={item.value} />
        </div>
    ));

    return (
        <section ref={sectionRef} className="bg-gray-900 text-white">
            <div className='container mx-auto py-24 px-8'>
                <h2 className="text-center text-5xl font-bold mb-16">Paragraph and Image</h2>
                <div className="grid md:grid-cols-2 gap-x-16">
                    <div>
                        <div>
                            <h3 className="text-4xl font-semibold pb-8">Lorem, ipsum dolor.</h3>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa nisi aut consequuntur magnam voluptates ipsam qui sed ea amet?</p>
                        </div>
                        <div className="flex pb-8">{progressGauges}</div>
                        <div>
                            <h4 className="text-3xl font-semibold pb-8">Lorem ipsum dolor sit amet</h4>
                            <p className="pb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam totam aut veniam voluptatibus in sit rem deleniti est perferendis quod.</p>
                            <p className="pb-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint laborum ratione repellat tempora, eveniet nihil non, veniam eaque eos ut hic tempore libero. Illum ipsa sint obcaecati, tempora quam dicta?</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-semibold pb-8">List</h4>
                            <p className="pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem ipsum placeat quod autem, ut error repudiandae veniam quas accusantium!</p>
                        </div>
                        {progressBars}
                        <div>
                            <h5 className="text-2xl font-semibold pb-4">Lorem ipsum dolor sit.</h5>
                            <ul className="mb-8 list-disc ml-4">
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, architecto.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates.</li>
                            </ul>
                        </div>
                        <Button label="Exciting button" />
                    </div>
                    <div className="relative">
                        <img
                            ref={imageRef}
                            src={ln_f35}
                            alt="Norwegian F-35 Taking off with afterburner and rainbow vortices"
                            className={`${isSticky ? 'sticky top-1/3' : ''}`}
                        />
                    </div>
                </div>
            </div>
            <div className='container mx-auto py-24 px-8'>
                <h2 className="text-center text-5xl font-bold mb-16">Paragraph and Image</h2>
                <div className="grid md:grid-cols-2 gap-x-16">
                    <div className="relative">
                        <img
                            ref={imageRef}
                            src={ln_f35}
                            alt="Norwegian F-35 Taking off with afterburner and rainbow vortices"
                            className={`${isSticky ? 'sticky top-1/3' : ''}`}
                        />
                    </div>
                    <div>
                        <div>
                            <h3 className="text-4xl font-semibold pb-8">Lorem, ipsum dolor.</h3>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa nisi aut consequuntur magnam voluptates ipsam qui sed ea amet?</p>
                        </div>
                        <div className="flex pb-8">{progressGauges}</div>
                        <div>
                            <h4 className="text-3xl font-semibold pb-8">Lorem ipsum dolor sit amet</h4>
                            <p className="pb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam totam aut veniam voluptatibus in sit rem deleniti est perferendis quod.</p>
                            <p className="pb-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint laborum ratione repellat tempora, eveniet nihil non, veniam eaque eos ut hic tempore libero. Illum ipsa sint obcaecati, tempora quam dicta?</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-semibold pb-8">List</h4>
                            <p className="pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem ipsum placeat quod autem, ut error repudiandae veniam quas accusantium!</p>
                        </div>
                        {progressBars}
                        <div>
                            <h5 className="text-2xl font-semibold pb-4">Lorem ipsum dolor sit.</h5>
                            <ul className="mb-8 list-disc ml-4">
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, architecto.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates.</li>
                            </ul>
                        </div>
                        <Button label="Exciting button" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ParagraphAndImage;
