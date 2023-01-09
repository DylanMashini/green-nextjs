/** @type {import('next-sitemap').IConfig} */

module.exports = {
	siteUrl: process.env.SITE_URL || "https://www.mygreenearth.org/",
	generateRobotsTxt: true,
	exclude: ["/admin/login", "/admin", "/admin/register"],
};
