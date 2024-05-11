export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      SideNavigation
      {children}
    </main>
  );
}
