import { Table, TableDataTitle, TableDataValue, TableRow } from './styles';

interface SubtitlesTableProps {
	release?: string;
	responsibilities?: string[];
	techs?: string[];
}

const SubtitlesTable = ({ release, responsibilities, techs }: SubtitlesTableProps) => {
	return (
		<Table>
			<tbody>
				<TableRow>
					<TableDataTitle>Lançamento</TableDataTitle>
					<TableDataValue>{release}</TableDataValue>
				</TableRow>

				<TableRow>
					<TableDataTitle>Atribuições</TableDataTitle>
					<TableDataValue>{responsibilities?.map((item) => `${item}, `)}</TableDataValue>
				</TableRow>

				<TableRow>
					<td className="font-semibold">Tecnologias</td>
					<td>{techs?.map((item) => `${item}, `)}</td>
				</TableRow>
			</tbody>
		</Table>
	);
};

export default SubtitlesTable;
