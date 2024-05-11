import ActiveLink from "./ActiveLink";

const Header = () => {
	const headerList = [
		{ id: 1, title: "Movies", href: "/movies" },
		{ id: 2, title: "Celebs", href: "/celebs" },
	];

	const activeClass =
		"after:content-[''] after:block after:w-full after:bg-white after:h-[3px] after:rounded-[32px]";

	return (
		<header>
			<ul className="flex gap-[15px]">
				{headerList.map((item) => (
					<li key={item.id}>
						<ActiveLink
							activeClass={activeClass}
							title={item.title}
							className="text-white text-xl font-bold after:transition-all after:content-[''] after:block after:w-0 after:bg-white after:h-[3px] after:rounded-[32px] hover:after:w-full"
							href={item.href}
						/>
					</li>
				))}
			</ul>
		</header>
	);
};

export default Header;
