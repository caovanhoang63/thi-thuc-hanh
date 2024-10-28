const PageHeader = ({children}: { children?: React.ReactNode }) => {
    return <div className={"flex justify-between pb-10 w-full"}>{children}</div>;
};

export default PageHeader;
