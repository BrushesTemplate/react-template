import '@wangeditor/editor/dist/css/style.css' // 引入 css
import React, { useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
import {uploadGoodsFiles} from '@brushes/store';
import {FormInstance} from 'antd/es/form';

export function ShopDes({ form }: { form: FormInstance }) {
  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null)   // TS 语法

  // 编辑器内容
  const [html, setHtml] = useState()

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = { }  // TS 语法

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {    // TS 语法
    placeholder: '请输入内容...',
    MENU_CONF: {
      uploadImage: {
        // 自定义上传
        async customUpload(file: File, insertFn: any) {  // TS 语法
          console.log(file)
          // async customUpload(file, insertFn) {                   // JS 语法
          // file 即选中的文件
          const data = await uploadGoodsFiles({file, tenantCode: '00000001'}) as any
          // 自己实现上传，并得到图片 url alt href
          insertFn(process.env.REACT_APP_BASE_URL + data.fileUrl)
        }
      }
    }

  }

  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return
      editor.destroy()
      setEditor(null)
    }
  }, [editor])

  const onChange = (params: any) => {
    console.log(params.getHtml())
    form.setFieldValue(['shopDes', 'region'], params.getHtml())
  }

  return (
    <>
      <div style={{ border: '1px solid #ccc', zIndex: 100}}>
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="simple"
          style={{ borderBottom: '1px solid #ccc' }}
        />
        <Editor
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={onChange}
          mode="simple"
          style={{ height: '300px', overflowY: 'hidden' }}
        />
      </div>
    </>
  )
}
