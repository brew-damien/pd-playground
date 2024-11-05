import Button from '../components/Button';
import Gif from "../images/Animation - 1727364070079.gif";
import image from "../images/light_blue_card.png";
import image2 from "../images/dark_blue_card.png";

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white">
            <div className="bg-gray-900">
                <div className="container mx-auto px-8 py-12">
                    <div className="text-center relative">
                        <h3 className="text-2xl font-bold pb-6">Still can't find what you're looking for?</h3>
                        <p className="text-lg pb-6">Can't find what you need? Access our support section for more help</p>
                        <Button label="Customer Support" />
                        <img className="absolute top-0 right-0 -translate-y-1/2 translate-x-[10%] h-[220px]" src={Gif} alt="corporate memphis style lady pointing at screen with photos" />
                        <div className="group">
                            <img className="absolute top-0 left-0 -translate-y-[45%] -translate-x-[-35%] h-[200px] group-hover:rotate-[-35deg] duration-200 origin-bottom scale-[93%]" src={image} alt="corporate memphis style man working at desk with web development tools" />
                            <img className="absolute top-0 left-0 -translate-y-[45%] -translate-x-[10%] h-[200px] group-hover:rotate-[35deg] duration-200 origin-bottom" src={image2} alt="corporate memphis style man working at desk with web development tools" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h4 className="text-xl font-bold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:text-white hover:underline">About Us</a></li>
                            <li><a href="/" className="hover:underline">Careers</a></li>
                            <li><a href="/" className="hover:underline">Press</a></li>
                            <li><a href="/" className="hover:underline">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-4">Support</h4>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:underline">Help Center</a></li>
                            <li><a href="/" className="hover:underline">FAQs</a></li>
                            <li><a href="/" className="hover:underline">Contact Us</a></li>
                            <li><a href="/" className="hover:underline">Live Chat</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="/" className="hover:underline">Terms of Service</a></li>
                            <li><a href="/" className="hover:underline">Cookie Policy</a></li>
                            <li><a href="/" className="hover:underline">Security</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-4">Social</h4>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:underline">Twitter</a></li>
                            <li><a href="/" className="hover:underline">Facebook</a></li>
                            <li><a href="/" className="hover:underline">Instagram</a></li>
                            <li><a href="/" className="hover:underline">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-[#027d95] py-4 text-center">
                <p className="text-sm text-gray-200">&copy; 2024 Damien Cook. All rights reserved.</p>
            </div>
        </footer >
    );
}

export default Footer;