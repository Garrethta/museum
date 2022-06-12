import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

export type Material = {
	createdTime: string,
	id: string,
	fields: {
		Deploy: boolean,
		Name: string,
		Text: string,
		Attachments?: string[],
		ID: number
	}
}

export function MaterialComponent(props: { mode: 'old' | 'new' }) {

	const { id } = useParams()
	console.log(id, 'id');

	const [material, setMaterial] = useState<Material | null>(null);

	useEffect(() => {
		fetch(`https://api.airtable.com/v0/appOUfEIThjJfxZ4q/${props.mode}/${id}?api_key=keyYi2iEDJGoFI90C`)
			.then(async (r) => {
				let res = await r.json()
				console.log(res, 'res');
				if (res.fields.Attachments && res.fields.Attachments.length > 1) {
					res.fields.Attachments.shift()
				}
				setMaterial(res)
			})
			.catch((e) => console.warn(e))
	}, [])

	return (
		<>
			<div className="container">
				<div style={{ width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
					{material && <div>
						<h2>{material.fields.Name}</h2>
						<div>

						</div>
						<div style={{ padding: '0 15px' }}>
							{material.fields.Text.split('|').map((a) => {
								return (
									<p>{a}</p>
								)
							})}
						</div>
					</div>}
					{!material && <span style={{ fontSize: '25px' }}>ЗАГРУЗКА...</span>}
				</div>
			</div>
		</>
	);
}