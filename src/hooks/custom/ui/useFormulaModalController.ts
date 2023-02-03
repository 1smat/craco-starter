import { useCallback, useState } from "react";

const useFormulaModalController = () => {
	const [selectedMezon, setSelectedMezon] = useState<Record<string, unknown>>({});
	const [isFormulaModalVisible, setIsFormulaModalVisible] = useState(false);

	const onOpenFormulaModal = (mezon: any) => {
		setSelectedMezon(mezon);
		setIsFormulaModalVisible(true);
	};

	const onCloseFormulaModal = useCallback(() => setIsFormulaModalVisible((prevV) => !prevV), []);

	return {
		onOpenFormulaModal,
		isFormulaModalVisible,
		onCloseFormulaModal,
		selectedMezon
	};
};

export default useFormulaModalController;
