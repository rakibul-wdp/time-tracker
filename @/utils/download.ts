export const downloadData = (fileUrl: string, fileName: string): void => {
    fetch(fileUrl).then((response) => {
        response.blob().then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = fileName;
            a.click();
        });
    });
};
