import Link from "next/link";
import FilmIcon from "./ui/FilmIcon";
import HeartIcon from "./ui/HeartIcon";
import CaledarIcon from "./ui/CaledarIcon";
import LogoutIcon from "./ui/LogoutIcon";
import ActiveLink from "./ActiveLink";

const Sidebar = () => {
	const navList = [
		{ id: 1, title: "Home", href: "/", icon: FilmIcon },
		{ id: 2, title: "Favorites", href: "/favorites", icon: HeartIcon },
		{ id: 3, title: "Premieres", href: "/premieres", icon: CaledarIcon },
	];

	return (
		<aside className="bg-neutral-900 h-screen w-[10%] fixed p-[20px] flex flex-col justify-between">
			<Link href="/" className="text-white text-start font-bold text-2xl">
				WATCH
			</Link>
			<ul className="flex flex-col items-start gap-[10px] mt-[15px]">
				{navList.map((item) => (
					<li key={item.id}>
						<ActiveLink
							title={item.title}
							activeClass="text-purple-500"
							className="text-white flex items-center gap-[10px] hover:text-purple-500  group"
							href={item.href}
						>
							{
								<item.icon className="transition-all group-hover:scale-150" />
							}
						</ActiveLink>
					</li>
				))}
			</ul>
			<div className="text-white flex justify-start items-center gap-[10px] hover:text-purple-500 cursor-pointer group">
				<LogoutIcon className="transition-all group-hover:scale-150" />
				Logout
			</div>
		</aside>
	);
};

export default Sidebar;
