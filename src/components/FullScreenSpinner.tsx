import {Spinner} from "flowbite-react";

export function FullScreenSpinner({loading}: { loading: boolean }) {
    if (!loading) {
        return <></>;
    }
    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-[999999]`}
        >
            <Spinner color="failure" aria-label="Failure spinner example"/>
        </div>
    );
}
