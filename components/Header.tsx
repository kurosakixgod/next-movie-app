import Link from "next/link";

const Header = () => {
	const headerList = [
		{ id: 1, title: "Movies", href: "/movies" },
		{ id: 2, title: "Celebs", href: "/celebs" },
	];

	return (
		<header>
			<ul className="flex gap-[15px]">
				{headerList.map((item) => (
					<li key={item.id}>
						<Link className="text-white" href={item.href}>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</header>
	);
};

export default Header;
